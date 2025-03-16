import { GitContributors } from "/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
