package com.project.freecruting.model;

import com.project.freecruting.repository.PostRepository;
import org.aspectj.lang.annotation.After;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;


@SpringBootTest
public class PostRepositoryTest {

    @Autowired
    PostRepository postRepository;


    @AfterEach
    public void cleanup() {
        postRepository.deleteAll();
    }

    @Test
    public void test1() {
        String title = "Test";
        String content = "Test";

        postRepository.save(Post.builder()
                .title(title)
                .content(content)
                .author("abc")
                .type("abc")
                .build());

        List<Post> postList = postRepository.findAll();

        Post post = postList.get(0);
        assertThat(post.getTitle()).isEqualTo(title);
        assertThat(post.getContent()).isEqualTo(content);
    }


}
