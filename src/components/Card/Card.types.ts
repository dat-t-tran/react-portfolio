import { ImageResponsiveProps } from "../ImageResponsive/ImageResponsive.types";

type HeaderType = "icon" | "image" | "none";

interface CardHeader extends ImageResponsiveProps {
  type: HeaderType;
  rounded?: boolean;
  wrapperClass?: string;
}

interface CardBody {
  className?: string;
  title: string;
  description: React.ReactNode | string;
}

interface CardFooter {
  visible: boolean;
  name?: string;
  onClick?: () => void;
}

export interface CardProps {
  header: CardHeader;
  body: CardBody;
  footer: CardFooter;
  customClass?: string;
}
