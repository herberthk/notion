"use client";

import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import React from "react";

import { Title } from "@/app/(main)/_components/title";
import { Cover } from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { useNewPage } from "@/hooks/use-new-page";

const NewPageModal = (): React.JSX.Element => {
  const onClose = useNewPage((state) => state.onClose);
  const isOpen = useNewPage((state) => state.isOpen);
  const documentId = useNewPage((state) => state.documentId);
  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    [],
  );

  const document = useQuery(api.documents.getById, {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    documentId: documentId!,
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      id: documentId!,
      content,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:!max-w-[70vw] sm:!max-w-[98vw] !h-[95vh] !pt-0 !pl-0 !pr-0 !pb-4 !m-0 !top-[2%] translate-y-0 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="p-3 font-bold">
            {document && <Title initialData={document} />}{" "}
          </DialogTitle>
        </DialogHeader>

        {document === undefined && (
          <div>
            <Cover.Skeleton />
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
              <div className="space-y-4 pl-8 pt-4">
                <Skeleton className="h-14 w-[50%]" />
                <Skeleton className="h-4 w-[80%]" />
                <Skeleton className="h-4 w-[40%]" />
                <Skeleton className="h-4 w-[60%]" />
              </div>
            </div>
          </div>
        )}

        {document === null && <div>Not found</div>}
        {!!document && (
          <>
            <Cover url={document.coverImage} documentId={document._id} />
            <Toolbar modal={true} initialData={document} />
            <Editor onChange={onChange} initialContent={document.content} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewPageModal;
