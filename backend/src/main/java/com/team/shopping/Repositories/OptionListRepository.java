package com.team.shopping.Repositories;

import com.team.shopping.Domains.OptionList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OptionListRepository extends JpaRepository<OptionList, Long> {
}