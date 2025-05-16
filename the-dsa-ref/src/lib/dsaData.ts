export interface DSAItem {
  id: string;
  title: string;
  category: 'data-structures' | 'algorithms';
  description: string;
  complexity: {
    time: string;
    space: string;
  };
  code: string;
}

export const dsaData: DSAItem[] = [
  {
    id: 'array',
    title: 'Array',
    category: 'data-structures',
    description: 'An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.',
    complexity: {
      time: 'Access: O(1), Search: O(n), Insertion: O(n), Deletion: O(n)',
      space: 'O(n)'
    },
    code: '// Array implementation in TypeScript\nconst array: number[] = [1, 2, 3, 4, 5];'
  },
  {
    id: 'linked-list',
    title: 'Linked List',
    category: 'data-structures',
    description: 'A linked list is a linear data structure where each element is a separate object. Each element (node) of a list is composed of two items: the data and a reference to the next node.',
    complexity: {
      time: 'Access: O(n), Search: O(n), Insertion: O(1), Deletion: O(1)',
      space: 'O(n)'
    },
    code: '// Linked List Node in TypeScript\nclass ListNode<T> {\n  constructor(\n    public value: T,\n    public next: ListNode<T> | null = null\n  ) {}\n}'
  },

  // Keep adding more data structures and algorithms items
];
