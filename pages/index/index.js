const knowledge = require('../../data/knowledge');

Page({
  data: {
    knowledgeTitle: '',
    meta: [],
    themes: [],
    openThemes: {},
    openTopics: {}
  },

  onLoad() {
    this.setData({
      knowledgeTitle: knowledge.title || '知识点目录',
      meta: knowledge.meta || [],
      themes: knowledge.themes || [],
      openThemes: {},
      openTopics: {}
    });
  },

  toggleTheme(e) {
    const themeId = e.currentTarget.dataset.id;
    const openThemes = Object.assign({}, this.data.openThemes);
    const openTopics = Object.assign({}, this.data.openTopics);

    if (openThemes[themeId]) {
      delete openThemes[themeId];
      const theme = (this.data.themes || []).find((t) => t.id === themeId);
      if (theme && theme.topics) {
        theme.topics.forEach((topic) => {
          if (topic && topic.id) delete openTopics[topic.id];
        });
      }
    } else {
      openThemes[themeId] = true;
    }

    this.setData({ openThemes, openTopics });
  },

  toggleTopic(e) {
    const topicId = e.currentTarget.dataset.id;
    const openTopics = Object.assign({}, this.data.openTopics);

    if (openTopics[topicId]) delete openTopics[topicId];
    else openTopics[topicId] = true;

    this.setData({ openTopics });
  },

  openLesson(e) {
    const lessonId = e.currentTarget.dataset.id;
    if (!lessonId) return;

    wx.navigateTo({
      url: `/pages/lesson/lesson?id=${encodeURIComponent(lessonId)}`
    });
  }
});
