/* global NexT, CONFIG, Gitalk */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  NexT.utils.loadComments('.gitalk-container')
    .then(() => NexT.utils.getScript(CONFIG.gitalk.js, {
      condition: window.Gitalk
    }))
    .then(() => {
      const gitalk = new Gitalk({
        clientID           : CONFIG.gitalk.client_id,
        clientSecret       : CONFIG.gitalk.client_secret,
        repo               : CONFIG.gitalk.repo,
        owner              : CONFIG.gitalk.github_id,
        admin              : [CONFIG.gitalk.admin_user],
        // id                 : CONFIG.gitalk.path_md5,
        id                 : (location.pathname).substring(0, 49),
        proxy              : CONFIG.gitalk.proxy,
        language           : CONFIG.gitalk.language || window.navigator.language,
        distractionFreeMode: CONFIG.gitalk.distraction_free_mode,
        // labels             : CONFIG.gitalk.labels? CONFIG.gitalk.labels.push(location.pathname): [].push(location.pathname)
      });
      gitalk.render(document.querySelector('.gitalk-container'));
    });
});
