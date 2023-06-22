export function getSubCategories(megaCategory) {
    // Replace this with your own logic to get the list of sub-categories
    // based on the selected mega-category
    switch (megaCategory) {
      case 'mega1':
        return ['sub1-1', 'sub1-2', 'sub1-3'];
      case 'mega2':
        return ['sub2-1', 'sub2-2', 'sub2-3'];
      default:
        return [];
    }
  }

  