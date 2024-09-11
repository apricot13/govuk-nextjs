/**
 * Helpers related to comments
 */

import { DprDocument } from "@/types";

import {
  BopsDocumentsMetadata,
  BopsNonStandardDocument,
  BopsFile,
} from "@/types/api/bops";
import { DprPaginationBase } from "@/types/definitions/pagination";
import { formatTag } from "@/util";

/**
 * Converts BOPS documents into our standard format
 * @param comment
 * @returns
 */
export const convertDocumentBopsNonStandard = (
  document: BopsNonStandardDocument,
): DprDocument => {
  return {
    url: document.url,
    title:
      document?.tags?.length > 0
        ? document.tags.map(formatTag).join(", ")
        : "Unnamed Document",
    created_at: document.created_at,
  };
};

/**
 * Converts BOPS files into our standard format
 * @param document
 * @returns
 */
export const convertDocumentBopsFile = (document: BopsFile): DprDocument => {
  return {
    url: document.url,
    title: document.name ?? "Unnamed document",
    created_at: document.createdAt ?? undefined,
    metadata: {
      byteSize: document.metadata?.byteSize,
      contentType: document.metadata?.contentType,
    },
  };
};

/**
 * Converts Bops documents metadata into our standard format
 * @param metadata
 * @returns
 */
export const convertBopsDocumentPagination = (
  metadata: BopsDocumentsMetadata,
): DprPaginationBase => {
  return {
    results: metadata.results,
    total_results: metadata.totalResults,
  };
};

/**
 * This generates a fake document - currently using the BopsNonStandardDocument type
 * @todo this will soon not be compatible with the new document type
 * Its added per page as opposed to at a higher level since we fetch the data at each load anyway,
 * it might be worth looking into if this affects caching for data fetching at some point though
 * @param council
 * @param reference
 * @returns
 */
export const ApplicationFormObject = (
  council: string,
  reference: string,
): DprDocument => {
  return {
    url: `/${council}/${reference}/application-form`,
    title: "Application form",
    metadata: {
      contentType: "text/html",
    },
  };
};
