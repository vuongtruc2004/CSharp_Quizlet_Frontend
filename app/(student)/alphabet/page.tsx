import { Metadata } from "next";
import AlphabetTab from "@/features/alphabet/ui/alphabet.tab";

export const metadata: Metadata = {
  title: "Bảng chữ cái",
};

const AlphabetPage = () => {
  return (
    <AlphabetTab />
  );
};

export default AlphabetPage;
