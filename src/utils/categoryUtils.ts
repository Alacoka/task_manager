export const getCategoryColor = (category: string) => {
  const colors = {
    personal: 'bg-purple-100 text-purple-800',
    work: 'bg-blue-100 text-blue-800',
    shopping: 'bg-green-100 text-green-800',
    health: 'bg-red-100 text-red-800',
    other: 'bg-gray-100 text-gray-800',
  };
  return colors[category as keyof typeof colors] || colors.other;
};