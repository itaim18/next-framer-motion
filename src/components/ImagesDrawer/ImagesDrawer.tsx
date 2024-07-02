"use client";

import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const images: string[] = [
  "https://github.com/shadcn-ui/ui/assets/37772742/a269a18e-9eac-4184-ac5b-d3e60b2bb319",
  "https://github.com/shadcn-ui/ui/assets/37772742/7250dfdf-c28e-429f-9783-bfb523894b38",
  "https://github.com/shadcn-ui/ui/assets/37772742/1ded0d26-c703-445a-ad57-9331479d1a14",
  "https://github.com/shadcn-ui/ui/assets/37772742/d899b217-6eef-41d7-9790-0ded9e851fe5",
  "https://github.com/shadcn-ui/ui/assets/37772742/db5f37df-f090-4049-8351-cd998b234373",

  "https://github.com/shadcn-ui/ui/assets/37772742/b579b044-f753-467a-8e35-9d847eae9c21",
  "https://github.com/shadcn-ui/ui/assets/37772742/83cdd57d-0375-4204-8cfa-d4579ca4b2a6",
  "https://github.com/shadcn-ui/ui/assets/37772742/05786b04-fd18-43c5-8ae0-0c6b75e25d30",
];

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={image}
                    alt="army pic"
                    className="aspect-square object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function ImagesDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">You can open up some memories</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Here are some pictures</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <CarouselDemo />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
export default ImagesDrawer;
