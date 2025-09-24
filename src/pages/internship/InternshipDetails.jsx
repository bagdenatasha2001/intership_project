import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InternshipTabs from "../../components/statusTabs/InternshipTabs";
import Dropdown from "../../components/form_fields/Dropdown";
import Hours from "../../components/form_fields/Hours";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/statusTabs/Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";

export default function InternshipDetails() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      internshipName: "",
      location: "",
      duration: "",
      positions: "",
      compensation: "",
      compensationAmount: "",
      hours: 40,
      hoursUnit: "Week",
      startDate: null,
      endDate: null,
      status: "",
      jobType: "Remote",
    },
  });

  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setFormData(data);
    navigate("/internship-criteria");
  };

  const locationOptions = [
    { value: "Riyadh", label: "Riyadh" },
    { value: "Dubai", label: "Dubai" },
    { value: "Mumbai", label: "Mumbai" },
  ];

  const durationOptions = [
    { value: "3 Months", label: "3 Months" },
    { value: "6 Months", label: "6 Months" },
    { value: "12 Months", label: "12 Months" },
  ];

  const yesNoOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const statusOptions = [
    { value: "Open", label: "Open" },
    { value: "Closed", label: "Closed" },
  ];

  const inputClasses = "w-full h-[56px] px-4 border rounded-md bg-white text-black placeholder:text-gray-400 font-normal focus:outline-none focus:border-black";


  return (
    <div className="px-5 py-4 rounded-lg w-full h-auto  my-3  shadow-md border border-gray-300 ">
      <div>
        <InternshipTabs />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-[30px]">

        <div className="flex w-full justify-start gap-5">
          <div className="flex flex-col w-[728px]">
            <label className="text-sm font-normal text-[#051B44] mb-2">
              Internship Name
            </label>
            <input
              type="text"
              placeholder="Java"
              className={inputClasses}
              {...register("internshipName", {
                required: "Internship Name is required",
              })}
            />
            {errors.internshipName && (
              <p className="text-red-600 text-[12px] mt-1">
                {errors.internshipName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-[362px]">


            <Controller
              name="location"
              control={control}
              rules={{ required: "Location is required" }}
              render={({ field }) => (
                <Dropdown
                  label="Location"
                  options={locationOptions}
                  value={field.value}
                  onChange={field.onChange}
                  withBorder={true}
                />
              )}
            />
            {errors.location && (
              <p className="text-red-600 text-[12px] mt-1">
                {errors.location.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex w-full  gap-5 justify-between">
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-normal text-[#051B44] mb-2">
              Job Type
            </label>
            <div className="flex gap-4">
              <Controller
                name="jobType"
                control={control}
                rules={{ required: "Job Type is required" }}
                render={({ field }) => (
                  <>
                    <div
                      className={`flex items-center justify-center w-1/2 h-[56px] border border-gray-300 rounded-md cursor-pointer text-sm text-gray-600 ${field.value === "Remote"
                        ? "bg-[rgb(197,231,229)]  text-white"
                        : "bg-white"
                        }`}
                      onClick={() => field.onChange("Remote")}
                    >
                      Remote
                    </div>
                    <div
                      className={`flex items-center justify-center w-1/2 h-[56px] border border-gray-300  rounded-md cursor-pointer text-sm text-gray-600 ${field.value === "On-Site"
                        ? "bg-[rgb(197,231,229)]  text-white "
                        : "bg-white"
                        }`}
                      onClick={() => field.onChange("On-Site")}
                    >
                      On-Site
                    </div>
                  </>
                )}
              />
            </div>
            {errors.jobType && (
              <p className="text-red-600 text-[12px] mt-1">
                {errors.jobType.message}
              </p>
            )}
          </div>

          <div className="w-1/2 flex gap-5">
            <div className="w-1/2 flex flex-col">

              <Controller
                name="duration"
                control={control}
                rules={{ required: "Duration is required" }}
                render={({ field }) => (
                  <Dropdown
                    label="Duration"
                    options={durationOptions}
                    value={field.value}
                    onChange={field.onChange}
                    withBorder={true}
                  />
                )}
              />

              {errors.duration && (
                <p className="text-red-600 text-[12px] mt-1">
                  {errors.duration.message}
                </p>
              )}
            </div>

            <div className="w-1/2 flex flex-col">
              <label className="text-sm font-normal text-[#051B44] mb-2">
                Positions
              </label>
              <input
                type="number"
                min="1"
                className={inputClasses}
                {...register("positions", {
                  required: "Positions is required",
                })}
              />
              {errors.positions && (
                <p className="text-red-600 text-[12px] mt-1">
                  {errors.positions.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex  gap-5">

          <div className="flex flex-col">
            <Controller
              name="hours"
              control={control}
              render={({ field }) => (
                <Hours
                  value={field.value}
                  unit="Week"
                  onChangeHours={field.onChange}
                  onChangeUnit={() => { }}
                />
              )}
            />
          </div>
          <div className="flex flex-row">

            <Controller
              name="compensation"
              control={control}
              rules={{ required: "Compensation is required" }}
              render={({ field }) => (
                <Dropdown
                  label="Compensation"
                  options={yesNoOptions}
                  value={field.value}
                  onChange={field.onChange}
                  withBorder={true}
                />
              )}
            />
            {errors.compensation && (
              <p className="text-red-600 text-[12px] mt-1">
                {errors.compensation.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-normal text-[#051B44] mb-2">
              Compensation Amount
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              className={inputClasses}
              {...register("compensationAmount", {
                required: "Compensation Amount is required",
              })}
            />
            {errors.compensationAmount && (
              <p className="text-red-600 text-[12px] mt-1">
                {errors.compensationAmount.message}
              </p>
            )}
          </div>

          <div className="relative flex flex-col">
            <label className="text-sm font-normal text-[#051B44] mb-2">
              Start Date
            </label>
            <div className="relative w-full">
              <Controller
                name="startDate"
                control={control}
                rules={{ required: "Start Date is required" }}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    className={`${inputClasses} w-full pr-10`}
                    placeholderText="Select"
                  />
                )}
              />
              <FaRegCalendarAlt
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                style={{ pointerEvents: "none" }}
              />
            </div>
            {errors.startDate && (
              <p className="text-red-600 text-[12px] mt-1">
                {errors.startDate.message}
              </p>
            )}
          </div>

          <div className="relative flex flex-col">
            <label className="text-sm font-semibold text-[#051B44] mb-2">
              End Date
            </label>
            <div className="relative w-full">
              <Controller
                name="endDate"
                control={control}
                rules={{ required: "End Date is required" }}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    className={`${inputClasses} w-full pr-10`}
                    placeholderText="Select"
                  />
                )}
              />
              <FaRegCalendarAlt
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                style={{ pointerEvents: "none" }}
              />
            </div>
            {errors.endDate && (
              <p className="text-red-600 text-[12px] mt-1">
                {errors.endDate.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex w-full ">
          <div className="w-[300px] flex flex-col">
            <Controller
              name="status"
              control={control}
              rules={{ required: "Internship Status is required" }}
              render={({ field }) => (
                <Dropdown
                  label="Internship Status"
                  options={statusOptions}
                  value={field.value}
                  onChange={field.onChange}
                  withBorder={true}
                />
              )}
            />
            {errors.status && (
              <p className="text-red-600 text-[12px] mt-1">
                {errors.status.message}
              </p>
            )}
          </div>
        </div>

        <div className="p-5 mt-20">
          <Button
            title1="Cancel"
            title2="Next"
            onClick1={() => navigate("/internship-table")}
            bg2="bg-teal-800 text-white"
            isSubmit={true}
          />
        </div>
      </form>
    </div>
  );
}
