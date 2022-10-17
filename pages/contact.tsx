import React from "react";
import axios from "axios";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Group, Text } from "@mantine/core";
import { motion, MotionConfig } from "framer-motion";
import { contact } from "../components/motion/Motion";

export default function Contact() {
  const onSubmit = async (data: any) => {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    await axios(config);
  };

  const form = useForm({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validate: {
      name: (value) => (value.length < 1 ? "※名前を入力してください" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "※メールアドレスを入力してください",
      message: (value) => (value.length < 1 ? "※本文を入力してください" : null),
    },
  });

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
          mt="sm"
          label="お問い合わせ"
          placeholder="Message"
          {...form.getInputProps("message")}
        />
        <Group position="right" mt="md">
          <button
            type="submit"
            className="bg-indigo-500 py-3 px-5 rounded-md text-white"
          >
            Submit
          </button>
        </Group>
      </form>
    </motion.div>
  );
}
