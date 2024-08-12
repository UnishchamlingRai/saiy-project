"use client";
import DeleteButton from "@/app/_components/UI/DeleteButton";
import { deleteEndUser } from "@/app/services/member/endUserService";
import React from "react";

const DeleteEndUser = ({ id }) => {
  return <DeleteButton id={id} deleteApi={deleteEndUser} />;
};

export default DeleteEndUser;
