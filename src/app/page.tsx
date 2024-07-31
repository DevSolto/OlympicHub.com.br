"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CountryType } from "./types/dataTypes";

export default function Home() {
  const [countries, setCountries] = useState<CountryType[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://apis.codante.io/olympic-games/countries');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecione seu país" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {countries.length > 0 ? (
              countries.map((country) => (
                <SelectItem key={country.id} value={country.id}>
                  <Image alt={`Bandeira do país ${country.name}`} src={country.flag_url} width={30} height={20} />
                  {country.name}
                </SelectItem>
              ))
            ) : (
              <p>Carregando países...</p>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </main>
  );
}
