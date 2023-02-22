import { htmlToText } from "html-to-text";
import base from "lib/base";
import { getContent, getSlugCategory } from "lib/news";
import { usePathname } from "next/navigation";

export default async function Head({ params }) {
  let title = "Daynews.mn - Мэдээ мэдээлэл";
  const { category } = await getSlugCategory(params.categoryslug);
  if (category) {
    title = "Daynews.mn" + " - " + category.name;
  }
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={""} />
      <meta property="og:title" content={""} />
      <meta property="og:description" content={""} />
      <meta property="og:image" content={""} />
    </>
  );
}
