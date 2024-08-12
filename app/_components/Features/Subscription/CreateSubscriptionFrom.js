"use client";
import { useForm } from "react-hook-form";
import { FaDollarSign } from "react-icons/fa";
import InputField from "../../UI/InputField";

const CreateSubscriptionFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full rounded-md text-gray-900">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label>Subscription Type</label>
            <div className="mt-2 flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Monthly"
                  {...register("subscriptionType")}
                  className="form-radio"
                />
                <span className="ml-2">Monthly</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Yearly"
                  {...register("subscriptionType")}
                  className="form-radio"
                />
                <span className="ml-2">Yearly</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label>Account Type</label>
            <select
              {...register("accountType")}
              className="mt-2 rounded-md p-2"
            >
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label>Length</label>
            <select {...register("length")} className="mt-2 rounded-md p-2">
              <option value="1">1 Month</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label>Payment Type</label>
            <select
              {...register("paymentType")}
              className="mt-2 rounded-md p-2"
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          {/* <InputField name={"price"} label={"Price"} register={register} /> */}
          <InputField
            label="Price"
            type="number"
            name="price"
            register={register}
            errors={errors}
          />

          <div className="flex flex-col">
            <label>Status</label>
            <select {...register("status")} className="mt-2 rounded-md p-2">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div>
          <p className="mb-2 font-bold">Benefits</p>
          <div className="flex flex-col gap-2">
            {[
              "Reach million of people",
              "Post Your Listing and sell anything",
              "Sell whatever you want at the best price",
            ].map((benefit, index) => (
              <div key={index} className="flex">
                <input
                  type="checkbox"
                  value={benefit}
                  {...register("benefits")}
                  className="form-checkbox"
                />
                <span className="ml-2">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="mr-2 rounded-md bg-gray-600 px-4 py-2"
          >
            Cancel
          </button>
          <button type="submit" className="rounded-md bg-blue-600 px-4 py-2">
            Create Subscription
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSubscriptionFrom;
