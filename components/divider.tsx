"use client";

import { FileText, Tag } from "lucide-react";

export default function Divider() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between">
        <div className="text-base font-bold text-black">Gallery</div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-sm text-black font-bold">
            <FileText size={14} />
            <span>Legal</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-black font-bold">
            <Tag size={14} />
            <span>Pricing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
