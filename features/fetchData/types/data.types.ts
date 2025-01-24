export interface DataItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface DataItemProps {
    item: {
      id: number;
      title: string;
      body: string;
    };
  }
