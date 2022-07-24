import { Button, message, Space } from "antd";
import React from "react";

export const success = (item) => {
    message.success(`${item} Sepete Eklendi`);
};

export const error = () => {
    message.error("This is an error message");
};

export const warning = (item) => {
    message.warning(`${item} sepetten kaldırıldı`);
};
