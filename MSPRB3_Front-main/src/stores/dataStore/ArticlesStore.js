import { create } from 'zustand';

const defaultArticles = [
  {
    id: 1,
    title: 'Entretien de mes cactus',
    dateDebut:"11/5/2024",
    dateFin:"24/5/2024",
    description:
      'Pour traiter une Peace Lily, il est important de garder le sol humide, mais pas détrempé. Laissez sécher légèrement entre les arrosages. La plante vous dira quand elle a besoin d’eau. Les feuilles commenceront à s’affaisser, mais elles se redresseront rapidement après l’arrosage. La paix Lily aime l’humidité, mais trop d’eau peut entraîner des problèmes de pourriture des racines. Il est préférable de sous-arroser que de trop arroser cette plante.'
  },
  {
    id: 2,
    title: 'Garde pour mes plantes (orchidées)',
    dateDebut:"6/8/2024",
    dateFin:"12/8/2024",
    description:
      "Les cactus nécessitent un sol bien drainé et beaucoup de lumière directe du soleil. Ils ont besoin d'être arrosés régulièrement pendant la saison de croissance, mais moins en hiver. Les cactus sont des plantes résistantes qui peuvent survivre dans des conditions difficiles, mais ils peuvent être sensibles à la pourriture des racines si le sol est trop humide."
  },
  {
    id: 3,
    title: 'Entretien des tomates',
    dateDebut:"15/3/2024",
    dateFin:"30/3/2024",
    description:
      "Les tomates ont besoin de beaucoup de soleil et d'un sol riche en nutriments. Elles doivent être arrosées régulièrement, mais le sol doit être bien drainé. Les tomates doivent être plantées à une distance suffisante pour permettre une bonne circulation de l'air et prévenir les maladies. Il est également important de les soutenir avec des tuteurs ou des cages à tomates pour les aider à grandir."
  },
  {
    id: 4,
    title: 'Entretien des orchidées',
    dateDebut:"11/5/2024",
    dateFin:"24/5/2024",
    description:
      "Les orchidées ont besoin d'un environnement humide, d'une lumière indirecte et d'un arrosage régulier. Cependant, elles n'aiment pas avoir les pieds constamment mouillés et peuvent développer des problèmes de pourriture des racines si le sol est trop humide. Il est préférable de laisser le sol sécher entre les arrosages."
  }
];

export const useArticleStore = create((set) => ({
  articles: defaultArticles,
  addArticle: (newArticle) => set((state) => ({ articles: [...state.articles, newArticle] })),
  updateArticle: (updatedArticle) =>
    set((state) => ({
      articles: state.articles.map((article) => (article.id === updatedArticle.id ? updatedArticle : article))
    })),
  removeArticle: (id) => set((state) => ({ articles: state.articles.filter((article) => article.id !== id) }))
}));
