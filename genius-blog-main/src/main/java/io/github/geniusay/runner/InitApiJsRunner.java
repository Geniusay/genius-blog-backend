package io.github.geniusay.runner;

import io.github.common.logger.CommonLogger;
import io.github.controller.HelloController;
import io.github.controller.TestController;
import io.github.generator.AutoApiJsGenerate;
import io.github.geniusay.constant.EnvConfig;
import io.github.geniusay.controller.BlogController;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;

import javax.annotation.Resource;
import java.util.List;

@Configuration
@ConditionalOnProperty(name = "genius.env.apiSavePath")
public class InitApiJsRunner implements ApplicationRunner {

    @Resource
    AutoApiJsGenerate autoApiJsGenerate;

    @Resource
    CommonLogger logger;

    @Resource
    EnvConfig envConfig;

    @Value("${spring.profiles.active:dev}")
    private String currentProfile;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if(currentProfile.equals("dev")){
            logger.info("init api js........");
            autoApiJsGenerate
                    .setAxiosPath("@/utils/request")
                    .filter(List.of(TestController.class, HelloController.class))
                    .setTemplatePath("E:\\Project\\GeniusWorld\\genius-blog-backend\\genius-blog-main\\src\\main\\resources\\templates\\")//选择模板加载路径
                    .setTemplateName("apiTs.java.vm")   //选择模板名字
                    .setFileSavePath(envConfig.apiSavePath)
                    .generate(false); //是否异步生成
            logger.info("init api js success.");
        }else{
            logger.info("current env:%s , init api closed.", currentProfile);
        }
    }
}
