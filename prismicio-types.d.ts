// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type QuickIntroDocumentDataSlicesSlice = FlashCardSlice;

/**
 * Content for homepage documents
 */
interface QuickIntroDocumentData {
  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: quickIntro.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<QuickIntroDocumentDataSlicesSlice>
  /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: quickIntro.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: quickIntro.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: quickIntro.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `quickIntro`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type QuickIntroDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<QuickIntroDocumentData>,
    "quickIntro",
    Lang
  >;

export type AllDocumentTypes = QuickIntroDocument;

/**
 * Primary content in *FlashCard → Primary*
 */
export interface FlashCardSliceDefaultPrimary {
  /**
   * title field in *FlashCard → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flashCard.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *FlashCard → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flashCard.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * email field in *FlashCard → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flashCard.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;
}

/**
 * Primary content in *FlashCard → Items*
 */
export interface FlashCardSliceDefaultItem {
  /**
   * linkIconName field in *FlashCard → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flashCard.items[].linkIconName
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkIconName: prismic.KeyTextField;

  /**
   * linkIconUrl field in *FlashCard → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flashCard.items[].linkIconUrl
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkIconUrl: prismic.KeyTextField;
}

/**
 * Default variation for FlashCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FlashCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FlashCardSliceDefaultPrimary>,
  Simplify<FlashCardSliceDefaultItem>
>;

/**
 * Slice variation for *FlashCard*
 */
type FlashCardSliceVariation = FlashCardSliceDefault;

/**
 * FlashCard Shared Slice
 *
 * - **API ID**: `flashCard`
 * - **Description**: FlashCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FlashCardSlice = prismic.SharedSlice<
  "flashCard",
  FlashCardSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      QuickIntroDocument,
      QuickIntroDocumentData,
      QuickIntroDocumentDataSlicesSlice,
      AllDocumentTypes,
      FlashCardSlice,
      FlashCardSliceDefaultPrimary,
      FlashCardSliceDefaultItem,
      FlashCardSliceVariation,
      FlashCardSliceDefault,
    };
  }
}
