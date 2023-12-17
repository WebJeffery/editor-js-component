export interface EditorType {
  holder?: string // id占位符
  readonly?: boolean // id占位符
  blockToolbar?: string[] // 块工具栏排序
  customPlugin?: object // 自定义工具栏
  pluginConfig?: object // 工具栏配置，深度合并
  editorConfig?: object // 编辑器配置
  disablePlugin?: string[] // 导航栏工具
  data?: object // 渲染数据
  initialized?: Function // 初始化函数
  messages?: object // 国际化
}

export interface PreviewType {

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
