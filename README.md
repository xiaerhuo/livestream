# livestream

# 为什么直接用html5的video标签都可以播放视频，而我却选择使用MSE API？

`<video src=””></video>`
html5 video标签支持的数据格式有：
* Mpeg-4
* Ogg
* webm
Video标签不能直接用来播放流媒体
而MSE API可播放自适应的流和时变的直播流,这是因为MSE API是把video标签的src值替换成一个mediasource对象
# media source extensions API 原理
# media source原理
![media source原理](https://github.com/xiaerhuo/livestream/blob/master/mse.png)
# fmp4直播流模拟演示

[先看小体积的视频流播放](https://xiaerhuo.github.io/livestream/index.html)

[再看大体积的视频流的播放](https://xiaerhuo.github.io/livestream/wsMse.html)

*sourcebuffer缓存区可以存放的视频大小有限，120M左右，所以在播放比较大的视频时，需要不断的清缓存区*

# MP4的数据格式
![MP4的数据格式](https://github.com/xiaerhuo/livestream/blob/master/MP4.png)
# fmp4的数据格式
![fmp4的数据格式](https://github.com/xiaerhuo/livestream/blob/master/fmp4.jpg)

# 为什么MSE API中要使用fragment MP4数据？
在DASH（自适应流媒体传输）中推荐使用的是fragmented Mp4(fMp4)格式，那么这种格式和传统的mp4格式有什么区别呢？
在fMp4格式中包含一系列的segments(moof+mdat的组合)，这些segments可以被独立的request（利用byte-range request），这有利于在不同质量级别的码流之间做码率切换操作
# Flv的数据格式

# 封装如何转换？
