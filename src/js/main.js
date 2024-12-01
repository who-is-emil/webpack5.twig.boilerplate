// Основной SCSS файл
import '@/scss/main';

// Поиска всех SCSS файлов в папке include
const context = require.context('@/include', true, /\.scss$/);

context.keys().forEach((file) => {
  context(file);
});
