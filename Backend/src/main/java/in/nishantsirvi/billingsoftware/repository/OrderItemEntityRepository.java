package in.nishantsirvi.billingsoftware.repository;

import in.nishantsirvi.billingsoftware.entity.OrderItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemEntityRepository extends JpaRepository<OrderItemEntity, Long> {


}
