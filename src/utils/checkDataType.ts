import { RegexPattern } from "./regexPattern";

export const isHtmlString = (
  description: React.ReactNode | string
): description is string => {
  return (
    typeof description === "string" && RegexPattern.stringHtml.test(description)
  );
};
