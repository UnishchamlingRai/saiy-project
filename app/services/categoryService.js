"use server";
import {
  create,
  deleteByPassword,
  getAll,
  getOne,
  update,
} from "./CURDfactory";
/////////////////////MAIN-CATEGORY////////////////////////////////
export async function getAllCategories() {
  return await getAll("/admin/api/category");
}

export async function getOneCategory(id) {
  return await getOne(`/admin/api/category/${id}`);
}

export async function createCategory(data) {
  return await create("/admin/api/category", data);
}
export async function updateCategory(id, data) {
  return await update(`/admin/api/category/${id}`, data);
}
export async function deleteCategory(id, password) {
  return await deleteByPassword(`/admin/api/delete-category/${id}`, password);
}

/////////////////////SUB-CATEGORY////////////////////////////////
export async function getAllSubCategories() {
  return await getAll("/admin/api/sub-categories");
}
export async function createSubCategory(data) {
  return await create("/admin/api/category", data);
}

export async function deleteSubCategory(id, password) {
  return await deleteByPassword(`/admin/api/delete-category/${id}`, password);
}

export async function getOneSubCategory(id) {
  return await getOne(`/admin/api/category/${id}`);
}
