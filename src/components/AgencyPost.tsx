import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { LogoBadge } from './Logo';

export function AgencyPost() {
  return (
    <div className="w-full max-w-[380px]">
      <div className="relative bg-white rounded-[28px] border border-gray-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)] overflow-hidden aspect-[4/5] flex flex-col">
        <div className="flex items-center gap-2.5 px-5 pt-5 pb-4 flex-shrink-0">
          <LogoBadge className="w-7 h-7" />
          <span className="text-[13px] font-semibold text-gray-900">conectado.</span>
          <div className="ml-auto flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="w-1 h-1 rounded-full bg-gray-300" />
          </div>
        </div>

        <div className="relative mx-5 rounded-2xl bg-[#F7F6F3] flex-1" />

        <div className="flex items-center justify-between px-5 pt-3">
          <div className="flex items-center gap-3.5">
            <Heart size={19} strokeWidth={1.7} className="text-gray-400" />
            <MessageCircle size={19} strokeWidth={1.7} className="text-gray-400" />
            <Send size={18} strokeWidth={1.7} className="text-gray-400" />
          </div>
          <Bookmark size={18} strokeWidth={1.7} className="text-gray-400" />
        </div>

        <div className="px-5 pt-2.5 pb-5" />
      </div>
    </div>
  );
}
