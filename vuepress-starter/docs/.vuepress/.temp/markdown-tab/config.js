import { CodeTabs } from "/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
