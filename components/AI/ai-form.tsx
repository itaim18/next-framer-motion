"use client";
import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import { useChat } from "@ai-sdk/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AIForm = ({ onSubmit, value, onChange }: any) => {
  return (
    <form method="post" onSubmit={onSubmit}>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
            AI Question
          </Label>
          <Input
            id="link"
            placeholder="Do you have mobile projects?"
            onChange={onChange}
            value={value}
          />
        </div>
        <Button type="submit" size="sm" className="px-3">
          <span className="sr-only">Send</span>
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default AIForm;
