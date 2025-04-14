"use client";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("duthanhduoc@gmail.com");
  console.log("loginpage");
  return (
    <div>
      LoginPage
      {email}
    </div>
  );
}
