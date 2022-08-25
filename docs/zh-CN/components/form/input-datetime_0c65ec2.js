amis.define('docs/zh-CN/components/form/input-datetime.md', function(require, exports, module, define) {

  module.exports = {
    "title": "InputDatetime 日期时间",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "InputDatetime",
    "icon": null,
    "order": 14,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime\",\n            \"label\": \"日期时间\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F\" href=\"#%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示格式</h2><p>选中任意日期时间，可以看到默认显示日期的格式是像<code>2020-04-14 12:20:10</code>这样的格式，如果你想要自定义显示格式，那么可以配置<code>inputFormat</code>。</p>\n<p>例如你想显示<code>2020年04月14日 12时20分10秒</code>这样的格式，查找 <a href=\"https://momentjs.com/docs/#/displaying/format/\">moment 文档</a> 可知配置格式应为 <code>YYYY年MM月DD日 HH时mm分ss秒</code>，即：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime\",\n            \"label\": \"日期时间\",\n            \"inputFormat\": \"YYYY年MM月DD日 HH时mm分ss秒\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>选中任意日期时间，观察显示格式</p>\n<h2><a class=\"anchor\" name=\"%E5%80%BC%E6%A0%BC%E5%BC%8F\" href=\"#%E5%80%BC%E6%A0%BC%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>值格式</h2><p>选中任意日期时间，可以看到默认表单项的值格式是像<code>1591862818</code>这样的时间戳格式。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime\",\n            \"label\": \"日期时间\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>如果你想要其他格式的日期值，那么可以配置<code>format</code>参数用于调整表单项的值格式。</p>\n<p>例如你调整值为<code>2020-04-14 12:20:10</code>这样的格式，查找 <a href=\"https://momentjs.com/docs/#/displaying/format/\">moment 文档</a> 可知配置格式应为 <code>YYYY-MM-DD HH:mm:ss</code>，即：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime\",\n            \"label\": \"日期时间\",\n            \"format\": \"YYYY-MM-DD HH:mm:ss\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>选中任意日期时间，观察数据域中表单项值的变化</p>\n<h2><a class=\"anchor\" name=\"%E9%BB%98%E8%AE%A4%E5%80%BC\" href=\"#%E9%BB%98%E8%AE%A4%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>默认值</h2><p>可以设置<code>value</code>属性，设置日期选择器的默认值</p>\n<h3><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" href=\"#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本配置</h3><p>配置符合当前 <a href=\"./datetime#%E5%80%BC%E6%A0%BC%E5%BC%8F\">值格式</a> 的默认值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime\",\n            \"label\": \"日期时间\",\n            \"value\": \"1591862818\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E7%9B%B8%E5%AF%B9%E5%80%BC\" href=\"#%E7%9B%B8%E5%AF%B9%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>相对值</h3><p><code>value</code> 还支持类似像<code>&quot;+1hours&quot;</code>这样的相对值，更加便捷的配置默认值</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime\",\n            \"label\": \"日期\",\n            \"value\": \"+1hours\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上例中配置了<code>&quot;value&quot;: &quot;+1hours&quot;</code>，默认就会选中一小时后的时间。</p>\n<p>支持的相对值关键字除了 <a href=\"./input-date#%E7%9B%B8%E5%AF%B9%E5%80%BC\">Date</a> 中的以外，还支持：</p>\n<ul>\n<li><code>now</code>: 当前时间</li>\n<li><code>minute</code>或<code>minutes</code>或<code>min</code>或<code>mins</code>: 分钟</li>\n<li><code>hour</code>或<code>hours</code>: 小时</li>\n</ul>\n<h2><a class=\"anchor\" name=\"%E9%99%90%E5%88%B6%E8%8C%83%E5%9B%B4\" href=\"#%E9%99%90%E5%88%B6%E8%8C%83%E5%9B%B4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>限制范围</h2><h3><a class=\"anchor\" name=\"%E6%8E%A7%E5%88%B6%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4\" href=\"#%E6%8E%A7%E5%88%B6%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>控制时间范围</h3><p>通过 <code>timeConstraints</code> 属性可以控制时间输入范围</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime\",\n            \"label\": \"日期时间\",\n            \"timeConstraints\": {\n                \"hours\": {\n                    \"min\": 12,\n                    \"max\": 18\n                },\n                \"minutes\": {\n                    \"step\": 15\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>可以通过配置<code>maxDate</code>和<code>minDate</code>显示可选范围</p>\n<h3><a class=\"anchor\" name=\"%E5%9B%BA%E5%AE%9A%E6%97%B6%E9%97%B4%E5%80%BC\" href=\"#%E5%9B%BA%E5%AE%9A%E6%97%B6%E9%97%B4%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>固定时间值</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"start\",\n            \"label\": \"开始时间\",\n            \"minDate\": \"1591862818\",\n            \"description\": \"限制可选最小日期是 <code>2020-06-11 16:06:58</code>\"\n        },\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"end\",\n            \"label\": \"结束时间\",\n            \"maxDate\": \"1591862818\",\n            \"description\": \"限制可选最大日期是 <code>2020-06-11 16:06:58</code>\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81%E7%9B%B8%E5%AF%B9%E5%80%BC\" href=\"#%E6%94%AF%E6%8C%81%E7%9B%B8%E5%AF%B9%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持相对值</h3><p>范围限制也支持设置 <a href=\"./input-date#%E7%9B%B8%E5%AF%B9%E5%80%BC\">相对值</a>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"start\",\n            \"label\": \"开始时间\",\n            \"minDate\": \"-1days\",\n            \"description\": \"限制可选最小日期是昨天\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81%E6%A8%A1%E6%9D%BF\" href=\"#%E6%94%AF%E6%8C%81%E6%A8%A1%E6%9D%BF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持模板</h3><p>也支持通过<a href=\"./template\">模板</a>，设置自定义值。</p>\n<p>来一个常见例子，配置两个选择<code>开始时间</code>和<code>结束时间</code>的时间选择器，需要满足：<code>开始时间</code>不能小于<code>结束时间</code>，<code>结束时间</code>也不能大于<code>开始时间</code>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"start\",\n            \"label\": \"开始时间\",\n            \"maxDate\": \"$end\"\n        },\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"end\",\n            \"label\": \"结束时间\",\n            \"minDate\": \"$start\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%BF%AB%E6%8D%B7%E9%94%AE\" href=\"#%E5%BF%AB%E6%8D%B7%E9%94%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>快捷键</h2><p>你也可以配置<code>shortcuts</code>属性支持快捷选择日期</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime\",\n            \"label\": \"日期\",\n            \"shortcuts\": [\"yesterday\" ,\"today\", \"tomorrow\"]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上例中我们配置了<code>&quot;shortcuts&quot;: [&quot;yesterday&quot; ,&quot;today&quot;, &quot;tomorrow&quot;]</code>，选择器顶部有将会显示快捷键<code>昨天</code>，<code>今天</code>和<code>明天</code></p>\n<p>除了支持 的快捷键有</p>\n<p>支持的快捷键除了 <a href=\"./date#%E5%BF%AB%E6%8D%B7%E9%94%AE\">Date</a> 中的以外，还支持：</p>\n<ul>\n<li><code>now</code>: 现在</li>\n<li><code>{n}hoursago</code> : n 小时前，例如：<code>2hoursago</code>，下面用法相同</li>\n<li><code>{n}hourslater</code> : n 小时前，例如：<code>2hourslater</code>，下面用法相同</li>\n</ul>\n<h2><a class=\"anchor\" name=\"utc\" href=\"#utc\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>UTC</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime\",\n            \"label\": \"普通日期时间\",\n            \"format\": \"YYYY-MM-DD\"\n        },\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"datetime-utc\",\n            \"label\": \"UTC日期时间\",\n            \"utc\": true,\n            \"format\": \"YYYY-MM-DD\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%86%85%E5%B5%8C%E6%A8%A1%E5%BC%8F\" href=\"#%E5%86%85%E5%B5%8C%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>内嵌模式</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"static-date\",\n            \"name\": \"date\",\n            \"format\": \"LLL\",\n            \"label\": \"当前值\"\n        },\n        {\n            \"type\": \"input-datetime\",\n            \"name\": \"date\",\n            \"label\": \"日期时间\",\n            \"embed\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>value</td>\n<td><code>string</code></td>\n<td></td>\n<td><a href=\"./datetime#%E9%BB%98%E8%AE%A4%E5%80%BC\">默认值</a></td>\n</tr>\n<tr>\n<td>format</td>\n<td><code>string</code></td>\n<td><code>X</code></td>\n<td>日期时间选择器值格式，更多格式类型请参考 <a href=\"https://momentjs.com/docs/#/displaying/format/\">文档</a></td>\n</tr>\n<tr>\n<td>inputFormat</td>\n<td><code>string</code></td>\n<td><code>YYYY-MM-DD HH:mm:ss</code></td>\n<td>日期时间选择器显示格式，即时间戳格式，更多格式类型请参考 <a href=\"https://momentjs.com/docs/#/displaying/format/\">文档</a></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td><code>string</code></td>\n<td><code>&quot;请选择日期以及时间&quot;</code></td>\n<td>占位文本</td>\n</tr>\n<tr>\n<td>shortcuts</td>\n<td><code>string</code></td>\n<td></td>\n<td>日期时间快捷键</td>\n</tr>\n<tr>\n<td>minDate</td>\n<td><code>string</code></td>\n<td></td>\n<td>限制最小日期时间</td>\n</tr>\n<tr>\n<td>maxDate</td>\n<td><code>string</code></td>\n<td></td>\n<td>限制最大日期时间</td>\n</tr>\n<tr>\n<td>utc</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>保存 utc 值</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否可清除</td>\n</tr>\n<tr>\n<td>embed</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否内联</td>\n</tr>\n<tr>\n<td>timeConstraints</td>\n<td><code>object</code></td>\n<td><code>true</code></td>\n<td>请参考 <a href=\"./input-time#控制输入范围\">input-time</a> 里的说明</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>event.data.xxx</code>事件参数变量来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>event.data.value: string</code> 时间值</td>\n<td>时间值变化时触发</td>\n</tr>\n<tr>\n<td>focus</td>\n<td><code>event.data.value: string</code> 时间值</td>\n<td>输入框获取焦点(非内嵌模式)时触发</td>\n</tr>\n<tr>\n<td>blur</td>\n<td><code>event.data.value: string</code> 时间值</td>\n<td>输入框失去焦点(非内嵌模式)时触发</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>将值重置为<code>resetValue</code>，若没有配置<code>resetValue</code>，则清空</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: string</code> 更新的时间值</td>\n<td>更新数据，依赖格式<code>format</code>，例如：&#39;1650556800&#39;</td>\n</tr>\n</tbody></table>\n</div>",
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
          "label": "显示格式",
          "fragment": "%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F",
          "level": 2
        },
        {
          "label": "值格式",
          "fragment": "%E5%80%BC%E6%A0%BC%E5%BC%8F",
          "fullPath": "#%E5%80%BC%E6%A0%BC%E5%BC%8F",
          "level": 2
        },
        {
          "label": "默认值",
          "fragment": "%E9%BB%98%E8%AE%A4%E5%80%BC",
          "fullPath": "#%E9%BB%98%E8%AE%A4%E5%80%BC",
          "level": 2,
          "children": [
            {
              "label": "基本配置",
              "fragment": "%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
              "fullPath": "#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
              "level": 3
            },
            {
              "label": "相对值",
              "fragment": "%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "fullPath": "#%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "level": 3
            }
          ]
        },
        {
          "label": "限制范围",
          "fragment": "%E9%99%90%E5%88%B6%E8%8C%83%E5%9B%B4",
          "fullPath": "#%E9%99%90%E5%88%B6%E8%8C%83%E5%9B%B4",
          "level": 2,
          "children": [
            {
              "label": "控制时间范围",
              "fragment": "%E6%8E%A7%E5%88%B6%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4",
              "fullPath": "#%E6%8E%A7%E5%88%B6%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4",
              "level": 3
            },
            {
              "label": "固定时间值",
              "fragment": "%E5%9B%BA%E5%AE%9A%E6%97%B6%E9%97%B4%E5%80%BC",
              "fullPath": "#%E5%9B%BA%E5%AE%9A%E6%97%B6%E9%97%B4%E5%80%BC",
              "level": 3
            },
            {
              "label": "支持相对值",
              "fragment": "%E6%94%AF%E6%8C%81%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "fullPath": "#%E6%94%AF%E6%8C%81%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "level": 3
            },
            {
              "label": "支持模板",
              "fragment": "%E6%94%AF%E6%8C%81%E6%A8%A1%E6%9D%BF",
              "fullPath": "#%E6%94%AF%E6%8C%81%E6%A8%A1%E6%9D%BF",
              "level": 3
            }
          ]
        },
        {
          "label": "快捷键",
          "fragment": "%E5%BF%AB%E6%8D%B7%E9%94%AE",
          "fullPath": "#%E5%BF%AB%E6%8D%B7%E9%94%AE",
          "level": 2
        },
        {
          "label": "UTC",
          "fragment": "utc",
          "fullPath": "#utc",
          "level": 2
        },
        {
          "label": "内嵌模式",
          "fragment": "%E5%86%85%E5%B5%8C%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E5%86%85%E5%B5%8C%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
