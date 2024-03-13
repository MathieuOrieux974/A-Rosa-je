import ArticleForm from '@components/article/ArticleForm/ArticleForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, Modal, Stack, Typography } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { useArticleStore } from '@stores/dataStore/ArticlesStore';
import { useState } from 'react';
import styles from './Articles.module.scss';

export default function Articles() {
  const articles = useArticleStore((state) => state.articles);
  const removeArticle = useArticleStore((state) => state.removeArticle);
  const { showSuccess } = useSnackbarStore();
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);
  const [selectedArticleUpdate, setSelectedArticleUpdate] = useState(null);
  const [isArticleFormOpen, setIsArticleFormOpen] = useState(false);

  const handleOpen = () => {
    setIsArticleFormOpen(true);
  };

  const handleUpdate = (article) => {
    setSelectedArticleUpdate(article);
    setIsArticleFormOpen(true);
  };

  const handleDelete = (article) => {
    removeArticle(article.id);
    showSuccess({ message: `L'annonce ${article.title} à été supprimé` });
  };

  const handleClose = () => {
    setSelectedArticleUpdate(null);
    setIsArticleFormOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction={{ xs: 'column', md: 'row-reverse' }}
        columnSpacing={3}
        rowGap={2}
        wrap="nowrap"
        className={styles.articlesPage}
      >

        <Grid item xs={12} md={12} className={styles.articlesListSection}>
          <Stack direction="column" gap={2} className={styles.articlesListSectionContent}>
            <Typography variant="h2">Liste d&apos;annonce</Typography>
            <Stack direction="column" gap={1} className={styles.articlesList}>
              {articles.map((article) => (
                <Stack
                  key={`${article.id} ${article.title}`}
                  onClick={() => setSelectedArticle(article)}
                  className={
                    styles.myArticlesCard + (article == selectedArticle ? ` ${styles.selectedArticleCard}` : '')
                  }
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid container direction="column" spacing={1} mb={3}>
                      <Typography variant="h5">{article.title}</Typography>
                  </Grid>
                  <Grid container direction="column" spacing={1} mb={1}>
                    <Typography variant="body1">Date de début :{article.dateDebut} et date de fin {article.dateFin}</Typography>
                    <Typography variant="body1"></Typography>

                  </Grid>

                  <Grid container direction="column" >
                    <Grid item xs={5}>
                      <Typography variant="body1">{article.description}</Typography>
                    </Grid>
                    <Stack item direction="row"  xs={2}>
                      <IconButton onClick={() => handleUpdate(article)} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(article)}>
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </Grid>

                </Stack>

              ))}
            </Stack>
            <Button variant="contained" onClick={handleOpen} className={styles.addArticleButton}>
              Ajouter une nouvelle annonce
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Modal open={isArticleFormOpen} onClose={handleClose} className={styles.articleFormModal}>
        <Stack gap={3} className={styles.articleFormCard}>
          <ArticleForm afterValidation={handleClose} afterCancel={handleClose} defaultArticle={selectedArticleUpdate} />
        </Stack>
      </Modal>
    </>
  );
}
