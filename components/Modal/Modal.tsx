import React, { useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  AppointmentsProps,
  DateProps,
} from "../Appointments/AvailableAppointments/AppointmentCards";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";
import { QueryObserverResult } from "@tanstack/query-core/build/lib/types";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slotData: AppointmentsProps;
  selectedDate: DateProps;
  refetch: () => Promise<QueryObserverResult<AppointmentsProps[], unknown>>;
}

const Modal = ({
  isOpen,
  setIsOpen,
  slotData,
  selectedDate,
  refetch,
}: ModalProps) => {
  const { user } = useContext(AuthContext);
  const closeModal = () => {
    setIsOpen(false);
  };
  const date =
    selectedDate.selectedDate && format(selectedDate.selectedDate, "PP");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  });

  const handleBooking: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const slotInput = form.querySelector<HTMLInputElement>(
      'select[name="slot"]'
    );
    const nameInput =
      form.querySelector<HTMLInputElement>('input[name="name"]');
    const emailInput = form.querySelector<HTMLInputElement>(
      'input[name="email"]'
    );
    const phoneNumberInput = form.querySelector<HTMLInputElement>(
      'input[name="phoneNumber"]'
    );
    const addressInput = form.querySelector<HTMLInputElement>(
      'input[name="address"]'
    );
    if (
      !slotInput ||
      !nameInput ||
      !emailInput ||
      !phoneNumberInput ||
      !addressInput
    ) {
      throw new Error("Please insert all data properly");
    } else if (
      !slotInput.value ||
      !nameInput.value ||
      !emailInput.value ||
      !phoneNumberInput.value ||
      !addressInput.value
    ) {
      Toast.fire({ icon: "error", title: "Please insert all data properly" });
    } else {
      const slot = slotInput.value;
      const name = nameInput.value;
      const email = emailInput.value;
      const phoneNumber = phoneNumberInput.value;
      const address = addressInput.value;
      const booking = {
        ServiceFor: slotData.name,
        AppointmentDate: date,
        AppointmentTime: slot,
        patient: name,
        email,
        phoneNumber,
        address,
        price: slotData.price,
      };
      console.log(slotData.price);

      fetch("https://thearpuetic-touchpoint-server-ppfa.vercel.app/booking", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data._id) {
            return Toast.fire({
              icon: "success",
              title: "Booking Successful go to the dashboard for payment",
            });
          }
          Toast.fire({
            icon: "error",
            title: `${data.message}`,
          });
          refetch();
        });
    }
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <form onSubmit={handleBooking}>
            <div className="fixed inset-0 overflow-y-auto mt-10">
              <div className="flex  md:m-0 p-7 md:min-h-full items-center justify-center text-center mt-10">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium text-center text-gray-900 uppercase"
                    >
                      {slotData.name}
                    </Dialog.Title>

                    <div className="  ">
                      <p className="text-sm text-gray-500 m-3">
                        configure your appointment time at our available time
                      </p>

                      <input
                        type="text"
                        className={`bg-black ${
                          date ? "text-white" : "text-red-500"
                        } w-full text-center p-2  text-xl rounded-full`}
                        disabled
                        value={date ? date : "Please choose a date"}
                      ></input>
                      <select
                        className="w-full rounded-full border-green-300 shadow-md  border-2 outline-none py-2 px-2 mt-2"
                        name="slot"
                      >
                        {slotData.slots.map((slot) => {
                          return (
                            <React.Fragment key={slot}>
                              <option
                                className="text-center text-xl "
                                value={slot}
                              >
                                {slot}
                              </option>
                            </React.Fragment>
                          );
                        })}
                      </select>
                      <input
                        type="text"
                        name="name"
                        value={user?.displayName}
                        disabled
                        placeholder="Enter your name"
                        className="w-full rounded-full font-bold border-gray-400  border py-2 mt-2 pl-3"
                      />
                      <br />
                      <input
                        type="email"
                        name="email"
                        value={user?.email}
                        disabled
                        placeholder="Enter your email"
                        className="w-full rounded-full font-bold border-gray-400  border py-2 mt-2 pl-3"
                      />
                      <br />
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter your Phone Number"
                        className="w-full rounded-full border-gray-400  border py-2 mt-2 pl-3"
                      />
                      <br />
                      <input
                        type="text"
                        name="address"
                        placeholder="Enter your Address"
                        className="w-full rounded-full border-gray-400 border py-2 mt-2 pl-3"
                      />
                      <br />
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="submit"
                        value={"submit"}
                        className="inline-flex justify-center rounded-lg border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-white"
                        onClick={closeModal}
                      >
                        Book
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </form>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
