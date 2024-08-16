"use client";
import React, { useState } from "react";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import { useForm } from "react-hook-form";
import InputField from "../../UI/InputField";
import CustomSelect from "../../UI/CustomSelect";

const AddRechargeCardFrom = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const watchRole = watch("role");
  const rechargeType = watch("rechargeType");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>Add Recharge Card</Button>
      <Modal onClose={() => setIsOpenModal(false)} isOpen={isOpenModal}>
        <div>
          <div className="mb-4 flex items-center justify-between border-b border-gray-400 px-2 py-4">
            <h1 className="text-xl font-bold text-primary-500">
              Add Recharge Card
            </h1>{" "}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <InputField
              type="text"
              label="Moderator Name"
              name="moderatorName"
              register={register}
              errors={errors}
            />
            <CustomSelect
              value={watchRole}
              placeholder={"Select Role"}
              onChange={(e) => setValue("role", e.target.value)}
              options={[
                { value: "Moderator", label: "Moderator" },
                { value: "Admin", label: "Admin" },
                { value: "User", label: "User" },
              ]}
            />
            <CustomSelect
              value={rechargeType}
              placeholder={"Select Recharge Type"}
              onChange={(e) => setValue("rechargeType", e.target.value)}
              options={[
                { value: "Card Code", label: "Card Code" },
                { value: "Payment Gateway", label: "Payment Gateway" },
              ]}
            />
            <InputField
              type="text"
              label="Card Code Number"
              name="cardCodeNumber"
              register={register}
              errors={errors}
            />
            <InputField
              type="text"
              label="Amount"
              name="amount"
              register={register}
              errors={errors}
            />
            <div className="flex gap-4">
              <Button onClick={() => setIsOpenModal(false)} variant="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddRechargeCardFrom;
