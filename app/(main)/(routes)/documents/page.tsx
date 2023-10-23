"use client";

import { useMutation } from "convex/react";
import { useQuery } from "convex/react";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

import EmptyPage from "@/components/empty-page";
import NewPageModal from "@/components/modals/new-page-modal";
import PagesSkeleton from "@/components/pages-skeleton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { useNewPage } from "@/hooks/use-new-page";

import { Menu } from "../../_components/menu";

const DocumentsPage = (): React.JSX.Element => {
  const documentId = useNewPage((state) => state.documentId);
  const setDocumentId = useNewPage((state) => state.setDocumentId);
  const openModal = useNewPage((state) => state.onOpen);
  const parentDocumentId: Id<"documents"> | undefined = undefined;
  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentDocumentId,
  });
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      setDocumentId(documentId),
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
    openModal();
  };
  // console.log('documents',documents?.at(0)?._creationTime)
  return (
    <>
      {documentId && <NewPageModal />}

      <div className="container">
        <div className="h-full flex flex-col space-y-4">
          {documents === undefined && <PagesSkeleton />}
          {documents?.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <EmptyPage />
              <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a page
              </Button>
            </div>
          )}
          {
            //@ts-ignore
            documents?.length > 0 && (
              <div className="flex my-4 justify-end">
                <Button onClick={onCreate}>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create a page
                </Button>
              </div>
            )
          }
          {documents?.map(({ icon, _id, title, _creationTime }) => (
            <Card key={_id}>
              <CardHeader>
                <CardTitle className="flex justify-between">
                  <p>
                    {title} {icon}
                  </p>
                  <Menu documentId={_id} />
                </CardTitle>
                <CardDescription>
                  {new Date(
                    Math.floor(new Date(_creationTime).getTime() / 1000) * 1000,
                  ).toLocaleDateString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button asChild>
                  <Link href={`/documents/${_id}`}>View</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default DocumentsPage;
