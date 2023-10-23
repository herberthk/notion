import { create } from "zustand";

import type { Id } from "@/convex/_generated/dataModel";
type NewPageStore = {
  isOpen: boolean;
  documentId: Id<"documents"> | null;
  setDocumentId: (id: Id<"documents">) => void;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewPage = create<NewPageStore>((set) => ({
  isOpen: false,
  documentId: null,
  setDocumentId: (id) => set({ documentId: id }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, documentId: null }),
}));
