"use client";

import React from "react";
import { Form, Input, Select, Button, Row, Col } from "antd";

export default function ContactForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div className="">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark={false}
        className="inquiry-form"
      >
        {/* Full Name */}
        <Form.Item
          label={<span className="form-label">Full Name</span>}
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input
            placeholder="Enter your full name"
            className="form-input h-10 lg:h-[52px]"
          />
        </Form.Item>

        {/* Email and Contact Number Row */}
        <Row gutter={[32, 0]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<span className="form-label">Your Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Invalid email format" },
              ]}
            >
              <Input
                placeholder="Enter your email"
                className="form-input h-10 lg:h-[52px]"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<span className="form-label">Contact No.</span>}
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <div className="flex gap-2">
                <Select
                  defaultValue="+880"
                  className="country-code-select h-10! lg:h-[52px]! "
                  style={{ width: 80 }}
                  options={[
                    { label: "+880", value: "+880" },
                    { label: "+1", value: "+1" },
                    { label: "+44", value: "+44" },
                  ]}
                />
                <Input
                  placeholder="1953512253"
                  type="tel"
                  inputMode="numeric"
                  pattern="[1-9]*"
                  maxLength={10}
                  className="form-input h-10! lg:h-[52px]!"
                />
              </div>
            </Form.Item>
          </Col>
        </Row>

        {/* Service Required and Project Budget Row */}
        <Row gutter={[32, 0]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<span className="form-label">Service required</span>}
              name="service"
              rules={[{ required: true, message: "Please select a service" }]}
            >
              <Select
                placeholder="Select you service"
                className="h-10! lg:h-[52px]! flex! text-start! "
                options={[
                  { label: "Web Development", value: "web" },
                  { label: "Mobile App", value: "mobile" },
                  { label: "UI/UX Design", value: "design" },
                  { label: "Consulting", value: "consulting" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label={<span className="form-label">Project budget</span>}
              name="budget"
              rules={[
                { required: true, message: "Please select a budget range" },
              ]}
              className="text-start!"
            >
              <Select
                placeholder="Select your range "
                className="h-10! lg:h-[52px]! text-start!"
                options={[
                  { label: "$1,000 - $5,000", value: "1-5k" },
                  { label: "$5,000 - $10,000", value: "5-10k" },
                  { label: "$10,000 - $25,000", value: "10-25k" },
                  { label: "$25,000+", value: "25k+" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Project Details */}
        <Form.Item
          label={<span className="form-label">Project Details</span>}
          name="details"
          rules={[{ required: true, message: "Please enter project details" }]}
        >
          <Input.TextArea
            placeholder="Enter your details"
            rows={8}
            className="form-input"
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
