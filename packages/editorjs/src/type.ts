export interface PropsType {
  holder: string // 类样式
  tool?: (string | object)[] // 工具栏
  customTool?: object // 自定义工具栏
  data: object
  editorConfig: object
  initialized?: Function
}

type ListItem = {
  content: string;
  items: Array<ListItem>;
};

export type BlockData = {
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
  data: BlockData
};

export type Transforms = {
  h1(block: Block): string;
  h2(block: Block): string;
  h3(block: Block): string;
  h4(block: Block): string;
  h5(block: Block): string;
  h6(block: Block): string;
  // delimiter(): string;
  // header(block: Block): string;
  // paragraph(block: Block): string;
  // list(block: Block): string;
  // image(block: Block): string;
  // quote(block: Block): string;
  // code(block: Block): string;
  // embed(block: Block): string;
  [key: string]: any;
};
