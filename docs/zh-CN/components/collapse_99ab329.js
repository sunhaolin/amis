amis.define('docs/zh-CN/components/collapse.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Collapse 折叠器",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Collapse 折叠器",
    "icon": null,
    "order": 36,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"collapse-group\",\n    \"activeKey\": [\"1\"],\n    \"body\": [\n      {\n        \"type\": \"collapse\",\n        \"key\": \"1\",\n        \"header\": \"标题1\",\n        \"body\": \"这里是内容1\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"key\": \"2\",\n        \"header\": \"标题2\",\n        \"body\": \"这里是内容2\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"key\": \"3\",\n        \"header\": \"标题3\",\n        \"body\": \"这里是内容3\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%89%8B%E9%A3%8E%E7%90%B4%E6%A8%A1%E5%BC%8F\" href=\"#%E6%89%8B%E9%A3%8E%E7%90%B4%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>手风琴模式</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"collapse-group\",\n    \"activeKey\": [\"1\"],\n    \"accordion\": true,\n    \"body\": [\n      {\n        \"type\": \"collapse\",\n        \"key\": \"1\",\n        \"header\": \"标题1\",\n        \"body\": \"这里是内容1\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"key\": \"2\",\n        \"header\": \"标题2\",\n        \"body\": \"这里是内容2\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"key\": \"3\",\n        \"header\": \"标题3\",\n        \"body\": \"这里是内容3\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义图标</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"collapse-group\",\n    \"activeKey\": [\"1\"],\n    \"expandIcon\": {\n      \"type\": \"icon\",\n      \"icon\": \"caret-right\"\n    },\n    \"body\": [\n      {\n        \"type\": \"collapse\",\n        \"key\": \"1\",\n        \"header\": \"标题1\",\n        \"body\": \"这里是内容1\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"key\": \"2\",\n        \"header\": \"标题2\",\n        \"body\": \"这里是内容2\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"key\": \"3\",\n        \"header\": \"标题3\",\n        \"body\": \"这里是内容3\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87%E4%BD%8D%E7%BD%AE\" href=\"#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87%E4%BD%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>设置图标位置</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"collapse-group\",\n    \"expandIconPosition\": \"right\",\n    \"activeKey\": [\"1\"],\n    \"body\": [\n      {\n        \"type\": \"collapse\",\n        \"key\": \"1\",\n        \"header\": \"标题1\",\n        \"body\": \"这里是内容1\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"key\": \"2\",\n        \"header\": \"标题2\",\n        \"body\": \"这里是内容2\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"key\": \"3\",\n        \"header\": \"标题3\",\n        \"body\": \"这里是内容3\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%9D%A2%E6%9D%BF%E5%B5%8C%E5%A5%97\" href=\"#%E9%9D%A2%E6%9D%BF%E5%B5%8C%E5%A5%97\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>面板嵌套</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"collapse-group\",\n    \"activeKey\": [\"1\"],\n    \"body\": [\n      {\n        \"type\": \"collapse\",\n        \"key\": \"1\",\n        \"header\": \"标题1\",\n        \"body\": {\n          \"type\": \"collapse-group\",\n          \"activeKey\": [\"1\"],\n          \"body\": [\n            {\n              \"type\": \"collapse\",\n              \"key\": \"1\",\n              \"header\": \"嵌套面板标题\",\n              \"body\": \"嵌套面板内容\"\n            }\n          ]\n        }\n      },\n      {\n        \"type\": \"collapse\",\n        \"key\": \"2\",\n        \"header\": \"标题2\",\n        \"body\": \"这里是内容2\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF%E7%A6%81%E7%94%A8\" href=\"#%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF%E7%A6%81%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>折叠面板禁用</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"collapse-group\",\n    \"activeKey\": [\"1\"],\n    \"body\": [\n      {\n        \"type\": \"collapse\",\n        \"key\": \"1\",\n        \"header\": \"标题1\",\n        \"body\": \"这里是内容1\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"disabled\": true,\n        \"key\": \"2\",\n        \"header\": \"标题2\",\n        \"body\": \"这里是内容2\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF%E5%9B%BE%E6%A0%87%E9%9A%90%E8%97%8F\" href=\"#%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF%E5%9B%BE%E6%A0%87%E9%9A%90%E8%97%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>折叠面板图标隐藏</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"collapse-group\",\n    \"body\": [\n      {\n        \"type\": \"collapse\",\n        \"key\": \"1\",\n        \"header\": \"标题1\",\n        \"body\": \"这里是内容1\"\n      },\n      {\n        \"type\": \"collapse\",\n        \"showArrow\": false,\n        \"key\": \"2\",\n        \"header\": \"标题2\",\n        \"body\": \"这里是内容2\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"collapsegroup-%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#collapsegroup-%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>CollapseGroup 属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;collapse-group&quot;</code></td>\n<td>指定为 collapse-group 渲染器</td>\n</tr>\n<tr>\n<td>activeKey</td>\n<td><code>Array&lt;string | number | never&gt; | string | number</code></td>\n<td>-</td>\n<td>初始化激活面板的key</td>\n</tr>\n<tr>\n<td>accordion</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>手风琴模式</td>\n</tr>\n<tr>\n<td>expandIcon</td>\n<td><code>SchemaNode</code></td>\n<td>-</td>\n<td>自定义切换图标</td>\n</tr>\n<tr>\n<td>expandIconPosition</td>\n<td><code>string</code></td>\n<td><code>&quot;left&quot;</code></td>\n<td>设置图标位置，可选值<code>left | right</code></td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"collapse-%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#collapse-%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Collapse 属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;collapse&quot;</code></td>\n<td>指定为 collapse 渲染器</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>禁用</td>\n</tr>\n<tr>\n<td>collapsed</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>初始状态是否折叠</td>\n</tr>\n<tr>\n<td>key</td>\n<td><code>string | number</code></td>\n<td>-</td>\n<td>标识</td>\n</tr>\n<tr>\n<td>header</td>\n<td><code>string | SchemaNode</code></td>\n<td>-</td>\n<td>标题</td>\n</tr>\n<tr>\n<td>body</td>\n<td><code>string | SchemaNode</code></td>\n<td>-</td>\n<td>内容</td>\n</tr>\n<tr>\n<td>showArrow</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否展示图标</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "手风琴模式",
          "fragment": "%E6%89%8B%E9%A3%8E%E7%90%B4%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E6%89%8B%E9%A3%8E%E7%90%B4%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "自定义图标",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87",
          "level": 2
        },
        {
          "label": "设置图标位置",
          "fragment": "%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87%E4%BD%8D%E7%BD%AE",
          "fullPath": "#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87%E4%BD%8D%E7%BD%AE",
          "level": 2
        },
        {
          "label": "面板嵌套",
          "fragment": "%E9%9D%A2%E6%9D%BF%E5%B5%8C%E5%A5%97",
          "fullPath": "#%E9%9D%A2%E6%9D%BF%E5%B5%8C%E5%A5%97",
          "level": 2
        },
        {
          "label": "折叠面板禁用",
          "fragment": "%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF%E7%A6%81%E7%94%A8",
          "fullPath": "#%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF%E7%A6%81%E7%94%A8",
          "level": 2
        },
        {
          "label": "折叠面板图标隐藏",
          "fragment": "%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF%E5%9B%BE%E6%A0%87%E9%9A%90%E8%97%8F",
          "fullPath": "#%E6%8A%98%E5%8F%A0%E9%9D%A2%E6%9D%BF%E5%9B%BE%E6%A0%87%E9%9A%90%E8%97%8F",
          "level": 2
        },
        {
          "label": "CollapseGroup 属性表",
          "fragment": "collapsegroup-%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#collapsegroup-%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "Collapse 属性表",
          "fragment": "collapse-%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#collapse-%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
