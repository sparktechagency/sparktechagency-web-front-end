"use client";

import React from "react";
import { Form, Input, Select, Button } from "antd";

const { TextArea } = Input;
const { Option } = Select;

export default function ContactForm() {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        console.log("Form values:", values);
    };

    return (
        <div className=" mx-auto ">
            <Form
                layout="vertical"
                form={form}
                onFinish={handleSubmit}
                requiredMark={false}
            >
                {/* Full Name */}
                <Form.Item
                    label={<span className="font-medium text-[#414141] text-lg">Full Name</span>}
                    name="fullName"
                    rules={[{ required: true, message: "Please enter your full name" }]}
                >
                    <Input
                        placeholder="Enter your full name"
                        className="h-[52px] rounded-xl border-[#DADADA]"
                    />
                </Form.Item>

                {/* Email and Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                        label={<span className="font-medium text-[#414141] text-lg">Your Email</span>}
                        name="email"
                        rules={[{ required: true, type: "email", message: "Enter a valid email" }]}
                    >
                        <Input
                            placeholder="Enter your email"
                            className="h-[52px] rounded-xl border-[#DADADA]"
                        />
                    </Form.Item>

                    <Form.Item
                        label={<span className="font-medium text-[#414141] text-lg">Contact No.</span>}
                        name="contact"
                        rules={[{ required: true, message: "Please enter your contact number" }]}
                    >
                        <Input
                            type="number"
                            placeholder="Enter your Contact Number"
                            className="h-[52px] rounded-xl border-[#DADADA]"
                        />
                    </Form.Item>
                </div>

                {/* Service and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                        label={<span className="font-medium text-[#414141] text-lg">Service required</span>}
                        name="service"
                        rules={[{ required: true, message: "Please select a service" }]}
                    >
                        <Select
                            placeholder="Select your service"
                            className=" rounded-xl"
                            style={{ height:52 }}
                        > 
                            <Option value="design">UI/UX Design</Option>
                            <Option value="development">Web Development</Option>
                            <Option value="marketing">Digital Marketing</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={<span className="font-medium text-[#414141] text-lg">Project budget</span>}
                        name="budget"
                        rules={[{ required: true, message: "Please select a budget range" }]}
                    >
                        <Select
                            placeholder="Select your range" 
                            style={{ height:52 }}
                        >
                            <Option value="low">$1000 - $3000</Option>
                            <Option value="medium">$3000 - $7000</Option>
                            <Option value="high">$7000 - $15000</Option>
                        </Select>
                    </Form.Item>
                </div>

                {/* Project Details */}
                <Form.Item
                    label={<span className="font-medium text-[#414141] text-lg">Project Details</span>}
                    name="details"
                    rules={[{ required: true, message: "Please enter your project details" }]}
                >
                    <TextArea
                        rows={7}
                        placeholder="Enter your details"
                        className="rounded-xl border-[#DADADA]"
                    />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item className="mb-0">
                    <button
                        type="submit"
                        className="bg-linear-to-b from-[#09320A] to-[#041504] text-white rounded-full h-16 w-full text-[16px] hover:bg-[#006B24] transition-all duration-300 text-lg font-semibold"
                    >
                        Submit Inquiry
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
}
