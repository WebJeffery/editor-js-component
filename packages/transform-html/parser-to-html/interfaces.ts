export type BlockType =
    | 'list'
    | 'header'
    | 'paragraph'
    | 'table'
    | 'delimiter'
    | 'alert'
    | 'checklist'
    | 'code'
    | 'image'
    | 'linkTool'
    | 'quote'
    | 'raw'
    | 'warning';

export type AlignmentType =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'inherit';

interface Tunes {
  alignmentTune?: {
    alignment: AlignmentType;
  };
}

export interface Props<T> {
  data: T;
  id: string;
  tunes?: Tunes;
  type: BlockType;
}

export interface HeaderBlock {
  anchor: string;
  level: number;
  text: string;
}

export interface ListBlock {
  style: 'ordered' | 'unordered';
  items: ListItem[];
}

export interface QuoteBlock {
  caption?: string;
  text: string;
}

export interface ParagraphBlock {
  text: string;
  alignment?: AlignmentType;
  align?: AlignmentType;
}

export interface TableBlock {
  withHeadings: boolean;
  content: Array<Array<string>>;
}

export interface AlertBlock {
  message: string;
  type: string;
}

export interface WarningBlock {
  message: string;
  title: string;
}

interface FileFormat {
  ext: string;
  hash: string;
  name: string;
  height: number;
  width: number;
  size: number;
  url: string;
  mime: string;
  path?: string;
}

interface File {
  alt: string;
  height: number;
  width: number;
  mime: string;
  size: number;
  url: string;
  formats: {
    large: FileFormat;
    medium: FileFormat;
    small: FileFormat;
    thumbnail: FileFormat;
  };
}

export interface ImageBlock {
  caption: string;
  stretched: boolean;
  withBackground: boolean;
  withBorder: boolean;
  file: File;
}

export interface CodeBlock {
  code: string;
}

export interface ButtonBlock {
  text: string;
  link: string;
}

export interface LinkToolBlockMeta {
  image?: File;
  title?: string;
  description?: string;
}

export interface LinkToolBlock {
  link: string;
  meta:LinkToolBlockMeta
}

export interface RawBlock {
  html: string;
}

export interface CheckListItem {
  checked: boolean;
  text: string;
}

export interface CheckListBlock {
  items: CheckListItem[];
}

export interface EmbedBlock {
  service: string;
  source: string;
  embed: string;
  width: number;
  height: number;
  caption: string;
}

export type BlockTuneData = any;

export type BlockToolData<T extends object = any> = T;

export interface OutputBlockData<Type extends string = string, Data extends object = any> {
  /**
   * Unique Id of the block
   */
  id?: string;
  /**
   * Tool type
   */
  type: Type;
  /**
   * Saved Block data
   */
  data: BlockToolData<Data>;

  /**
   * Block Tunes data
   */
  tunes?: { [name: string]: BlockTuneData };
}

export type ListItem = {
  content: string;
  items: Array<ListItem>;
};

type BlockData = {
  text?: string;
  level?: number;
  caption?: string;
  url?: string;
  file?: {
    url?: string;
  };
  stretched?: boolean;
  withBackground?: boolean;
  withBorder?: boolean;
  items?: Array<string> | Array<ListItem>;
  style?: string;
  code?: string;
  service?: 'vimeo' | 'youtube';
  source?: string;
  embed?: string;
  width?: number;
  height?: number;
  alignment?: 'left' | 'right' | 'center' | 'justify';
  align?: 'left' | 'right' | 'center' | 'justify';
}

export type Block = {
  type: string;
  data: BlockData;
};

export type Transforms = {
  [key: string]: any;
  delimiter(): string;
  header(block: Block): string;
  paragraph(block: Block): string;
  list(block: Block): string;
  image(block: Block): string;
  quote(block: Block): string;
  code(block: Block): string;
  embed(block: Block): string;
};

type Element = {
  class: string
}

export type ElementConfig = {
  wrapBlock: boolean,
  header: Element
  paragraph: Element
}

// const alignType = ['left', 'right', 'center', 'justify']
