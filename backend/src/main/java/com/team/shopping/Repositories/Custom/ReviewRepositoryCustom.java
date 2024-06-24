package com.team.shopping.Repositories.Custom;

import com.team.shopping.Domains.Product;
import com.team.shopping.Domains.Review;

import java.util.Optional;

public interface ReviewRepositoryCustom {
    Optional<Review> findByProduct(Product product);
}
