/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageLayoutOverridesProps = {
    HomePageLayout?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage38464303?: PrimitiveOverrideProps<FlexProps>;
    Message38464370?: PrimitiveOverrideProps<FlexProps>;
    Eyebrow38464371?: PrimitiveOverrideProps<TextProps>;
    Heading38464372?: PrimitiveOverrideProps<TextProps>;
    Body38464373?: PrimitiveOverrideProps<TextProps>;
    imageHome?: PrimitiveOverrideProps<ImageProps>;
    HeroMessage38464321?: PrimitiveOverrideProps<FlexProps>;
    Button38534900?: PrimitiveOverrideProps<ButtonProps>;
    Message38464322?: PrimitiveOverrideProps<FlexProps>;
    Heading38464324?: PrimitiveOverrideProps<TextProps>;
    Body38464325?: PrimitiveOverrideProps<TextProps>;
    Right?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage38464447?: PrimitiveOverrideProps<FlexProps>;
    Message38464448?: PrimitiveOverrideProps<FlexProps>;
    Eyebrow39103599?: PrimitiveOverrideProps<TextProps>;
    Heading38464450?: PrimitiveOverrideProps<TextProps>;
    Body38464451?: PrimitiveOverrideProps<TextProps>;
    imageHome2?: PrimitiveOverrideProps<ImageProps>;
    HeroMessage38464453?: PrimitiveOverrideProps<FlexProps>;
    Button38534904?: PrimitiveOverrideProps<ButtonProps>;
    Message38464454?: PrimitiveOverrideProps<FlexProps>;
    Heading38464455?: PrimitiveOverrideProps<TextProps>;
    Body38464456?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomePageLayoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "Light";
} & {
    overrides?: HomePageLayoutOverridesProps | undefined | null;
}>;
export default function HomePageLayout(props: HomePageLayoutProps): React.ReactElement;
