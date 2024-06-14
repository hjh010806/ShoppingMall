package com.team.shopping.Domains;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private SiteUser author;

    @ManyToOne(fetch = FetchType.LAZY)
    private Product product;

    @Column(length = 50)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private Double grade;

    private LocalDateTime createDate;

    private LocalDateTime modifyDate;

    @Builder
    public Review (SiteUser author, Product product, String title, String content, Double grade) {
        this.author = author;
        this.product = product;
        this.title = title;
        this.content = content;
        this.grade = grade;
        this.createDate = LocalDateTime.now();
    }
}
