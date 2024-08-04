import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  type = "button",
  variant = "primary",
  children,
  onClick,
  disabled,
}) => {
  const buttonClass = classNames(
    "px-4 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 w-full",
    {
      "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 text-white":
        variant === "primary",
      " hover:shadow hover:text-primary-600 text-black focus:ring-gray-500 border border-primary-500 text-primary-600":
        variant === "secondary",
      "bg-red-500  hover:bg-red-600 focus:ring-red-500 text-white":
        variant === "danger",
      "opacity-50 cursor-not-allowed": disabled,
    },
  );

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
