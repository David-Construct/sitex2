"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { portfolio } from "@/lib/data";
import Image from "next/image";

const categories = ["Toate", "Case din Lemn", "Căsuțe A-frame", "Construcții din Lemn"];

export default function ClientPortfolio() {
  const [filter, setFilter] = useState("Toate");

  const filteredPortfolio =
    filter === "Toate"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-32">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredPortfolio.map((project, index) => (
            <Card key={`${project.title}-${index}`} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-w-4 aspect-h-3 bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.hint}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-headline text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 