import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Group, Text, Loader } from "@mantine/core";
import { contact } from "../components/motion/Motion";

export default function Contact() {
  const [load, setLoad] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const form = useForm({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validate: {
      name: (value) => (value.length < 1 ? "※名前を入力してください" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "※メールアドレスを入力してください",
      message: (value) => (value.length < 1 ? "※本文を入力してください" : null),
    },
  });

  const onSubmit = async (data: any) => {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    setLoad(true);
    await axios(config);
    setLoad(false);
    form.reset();
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const AfterSubmit = () => {
    return (
      <div className="pt-4 pb-20">
        <div
          className={`flex flex-col items-center justify-center sm:text-3xl text-xl mt-20 ${
            visible ? "visible" : "hidden"
          }`}
        >
          <div className="flex overflow-hidden justify-center">ARIGATO !!</div>
        </div>
        <Loader
          variant="bars"
          size={50}
          m="auto"
          className={`${load ? "visible" : "hidden"}`}
        />
      </div>
    );
  };

  return (
    <motion.div variants={contact} initial="hidden" animate="visible">
      <Group position="center" className="flex flex-col my-14 text-2xl">
        <Text>Contact Form</Text>
        <Text size="sm" mt="md">
          お問い合わせやご意見につきましては、以下のフォームよりお問い合わせ下さい。
        </Text>
      </Group>
      <form
        method="POST"
        className="lg:mx-20"
        onSubmit={form.onSubmit(onSubmit)}
      >
        <TextInput
          label="氏名"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="sm"
          label="メールアドレス"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <TextInput
          mt="sm"
          label="件名"
          placeholder="Subject"
          {...form.getInputProps("subject")}
        />
        <Textarea
          minRows={8}
          mt="sm"
          label="お問い合わせ"
          placeholder="Message"
          {...form.getInputProps("message")}
        />
        <Group position="right" mt="xl">
          <button
            type="submit"
            className="bg-indigo-500 py-3 px-5 rounded-md text-white"
          >
            送信する
          </button>
        </Group>
      </form>

      <AfterSubmit />
    </motion.div>
  );
}
