import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { ClientInfromationProps } from "../../pages/dashboard/payment/[_id]";
import Swal from "sweetalert2";

interface ClientInformationProps {
  clientInformation: ClientInfromationProps;
}
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const CheckOut = ({ clientInformation }: ClientInformationProps) => {
  const [paymentError, setPaymentError] = useState<string | undefined>(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState<boolean>(false);
  const [transitionId, setTransitionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { _id, price, email, patient } = clientInformation;
  useEffect(() => {
    fetch(
      "https://thearpuetic-touchpoint-server-ppfa.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price: price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true);
    setSuccess(" ");
    setTransitionId("");
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setPaymentError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setPaymentError(" ");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });
    if (confirmError) {
      setPaymentError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        email,
        bookingId: _id,
        transitionId: paymentIntent.id,
      };
      fetch("https://thearpuetic-touchpoint-server-ppfa.vercel.app/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSuccess("Your payment is succeeded");
          setTransitionId(paymentIntent.id);
          Toast.fire({ icon: "success", title: `Payment done successfully` });
        });
    }
    setProcessing(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-green-400 p-2 rounded-lg hover:bg-green-800 text-white"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {success && (
        <div>
          <p className="text-green-500 text-center"> {success}</p>
          <p className="text-center">
            {`Your transition id is ${transitionId}`}
          </p>
        </div>
      )}
      {paymentError && (
        <p className="text-center text-red-500">{paymentError}</p>
      )}
    </div>
  );
};

export default CheckOut;
