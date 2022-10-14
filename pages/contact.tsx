import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [open, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const onSubmitForm = async (data: any) => {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    setVisible(true);
    await axios(config);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setVisible(false);
    }, 6000);
  };

  return <div className=""></div>;
}
